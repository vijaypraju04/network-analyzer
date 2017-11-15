# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := run-tests
DEFS_Debug := \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_GNU_SOURCE' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-fvisibility=hidden \
	-mmacosx-version-min=10.7 \
	-arch x86_64 \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-Wstrict-prototypes \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter \
	-Wno-long-long

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-g \
	--std=gnu89 \
	-pedantic \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++0x \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-threadsafe-statics \
	-g \
	--std=gnu89 \
	-pedantic \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I$(srcdir)/deps/uv/include

DEFS_Release := \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_GNU_SOURCE'

# Flags passed to all source files.
CFLAGS_Release := \
	-Os \
	-gdwarf-2 \
	-fvisibility=hidden \
	-mmacosx-version-min=10.7 \
	-arch x86_64 \
	-Wall \
	-Wextra \
	-Wno-unused-parameter \
	-Wstrict-prototypes \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter \
	-Wno-long-long

# Flags passed to only C files.
CFLAGS_C_Release := \
	-g \
	--std=gnu89 \
	-pedantic \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++0x \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-threadsafe-statics \
	-g \
	--std=gnu89 \
	-pedantic \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I$(srcdir)/deps/uv/include

OBJS := \
	$(obj).target/$(TARGET)/deps/uv/test/blackhole-server.o \
	$(obj).target/$(TARGET)/deps/uv/test/echo-server.o \
	$(obj).target/$(TARGET)/deps/uv/test/run-tests.o \
	$(obj).target/$(TARGET)/deps/uv/test/runner.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-get-loadavg.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-active.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-async.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-async-null-cb.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-callback-stack.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-callback-order.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-close-fd.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-close-order.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-connection-fail.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-cwd-and-chdir.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-default-loop-close.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-delayed-accept.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-eintr-handling.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-error.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-embed.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-emfile.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-env-vars.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-fail-always.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-fork.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-fs.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-fs-copyfile.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-fs-event.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-get-currentexe.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-get-memory.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-get-passwd.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-getaddrinfo.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-gethostname.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-getnameinfo.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-getsockname.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-handle-fileno.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-homedir.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-hrtime.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-idle.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-ip6-addr.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-ipc.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-ipc-send-recv.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-loop-handles.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-loop-alive.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-loop-close.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-loop-stop.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-loop-time.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-loop-configure.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-walk-handles.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-watcher-cross-stop.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-multiple-listen.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-osx-select.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pass-always.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-ping-pong.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-bind-error.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-connect-error.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-connect-multiple.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-connect-prepare.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-getsockname.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-pending-instances.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-sendmsg.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-server-close.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-close-stdout-read-stdin.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-set-non-blocking.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-pipe-set-fchmod.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-platform-output.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-poll.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-poll-close.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-poll-close-doesnt-corrupt-stack.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-poll-closesocket.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-poll-oob.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-process-title.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-queue-foreach-delete.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-ref.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-run-nowait.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-run-once.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-semaphore.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-shutdown-close.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-shutdown-eof.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-shutdown-twice.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-signal.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-signal-multiple-loops.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-socket-buffer-size.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-spawn.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-fs-poll.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-stdio-over-pipes.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-alloc-cb-fail.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-bind-error.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-bind6-error.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-close.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-close-accept.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-close-while-connecting.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-create-socket-early.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-connect-error-after-write.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-shutdown-after-write.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-flags.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-connect-error.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-connect-timeout.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-connect6-error.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-open.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-write-to-half-open-connection.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-write-after-connect.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-writealot.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-write-fail.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-try-write.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-unexpected-read.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-oob.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-read-stop.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tcp-write-queue-order.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-threadpool.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-threadpool-cancel.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-thread-equal.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tmpdir.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-mutexes.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-thread.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-barrier.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-condvar.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-timer-again.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-timer-from-check.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-timer.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-tty.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-alloc-cb-fail.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-bind.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-create-socket-early.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-dgram-too-big.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-ipv6.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-open.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-options.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-send-and-recv.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-send-hang-loop.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-send-immediate.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-send-unreachable.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-multicast-join.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-multicast-join6.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-dlerror.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-multicast-ttl.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-ip4-addr.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-multicast-interface.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-multicast-interface6.o \
	$(obj).target/$(TARGET)/deps/uv/test/test-udp-try-send.o \
	$(obj).target/$(TARGET)/deps/uv/test/runner-unix.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# Make sure our dependencies are built before any of us.
$(OBJS): | $(builddir)/libuv.a

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))
$(OBJS): GYP_OBJCFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE)) $(CFLAGS_OBJC_$(BUILDTYPE))
$(OBJS): GYP_OBJCXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE)) $(CFLAGS_OBJCC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.7 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LDFLAGS_Release := \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.7 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release := \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LIBS := \
	-lutil \
	-lm

$(builddir)/run-tests: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/run-tests: LIBS := $(LIBS)
$(builddir)/run-tests: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/run-tests: LD_INPUTS := $(OBJS) $(builddir)/libuv.a
$(builddir)/run-tests: TOOLSET := $(TOOLSET)
$(builddir)/run-tests: $(OBJS) $(builddir)/libuv.a FORCE_DO_CMD
	$(call do_cmd,link)

all_deps += $(builddir)/run-tests
# Add target alias
.PHONY: run-tests
run-tests: $(builddir)/run-tests

